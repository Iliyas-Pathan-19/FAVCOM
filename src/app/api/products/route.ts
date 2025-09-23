import { NextRequest, NextResponse } from 'next/server';
import { loadProducts, searchProducts, getProductsByCategory } from '@/lib/products';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');
    const search = searchParams.get('search') || '';
    const category = searchParams.get('category') || '';
    const sortBy = searchParams.get('sortBy') || 'name';
    const minPrice = parseFloat(searchParams.get('minPrice') || '0');
    const maxPrice = parseFloat(searchParams.get('maxPrice') || '1000000');

    let products = loadProducts();

    // Apply filters
    if (search) {
      products = searchProducts(search);
    }

    if (category) {
      products = products.filter(product =>
        product.category.toLowerCase().includes(category.toLowerCase()) ||
        product.subcategory.toLowerCase().includes(category.toLowerCase())
      );
    }

    // Apply price filter
    products = products.filter(product =>
      product.price >= minPrice && product.price <= maxPrice
    );

    // Apply sorting
    products.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating-low':
          return a.rating - b.rating;
        case 'rating-high':
          return b.rating - a.rating;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    // Calculate pagination
    const totalProducts = products.length;
    const totalPages = Math.ceil(totalProducts / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedProducts = products.slice(startIndex, endIndex);

    return NextResponse.json({
      products: paginatedProducts,
      pagination: {
        currentPage: page,
        totalPages,
        totalProducts,
        limit,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1
      }
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}
