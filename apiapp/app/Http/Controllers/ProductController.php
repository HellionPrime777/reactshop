<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::all();
        return response()->json($products, 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $product = new Product();
        $product->name = $request->name ?? '';
        $product->price = $request->price ?? 0;
        $product->discounted_price = $request->discounted_price ?? 0;
        $product->image = $request->image ?? '';
        $product->save();

        $products = Product::all();
        return response()->json($products, 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $product = Product::find($id);

        if ($product) {
            return response()->json($product, 200);
        } else {
            return response()->json(['error' => 'Product not found'], 404);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $product = Product::find($id);

        if ($product) {
            $product->name = $request->name ?? $product->name;
            $product->price = $request->price ?? $product->price;
            $product->discounted_price = $request->discounted_price ?? $product->discounted_price;
            $product->image = $request->image ?? $product->image;
            $product->save();

            $products = Product::all();
            return response()->json($products, 200);
        } else {
            return response()->json(['error' => 'Product not found'], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $product = Product::find($id);

        if ($product) {
            $product->delete();
            $products = Product::all();
            return response()->json($products, 200);
        } else {
            return response()->json(['error' => 'Product not found'], 404);
        }
    }
}
