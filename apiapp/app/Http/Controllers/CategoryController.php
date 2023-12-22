<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // dd(666);
        
        $categories=Category::all();
        return response()->json($categories,200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {        
        // return view('laravel-examples/testpost/testpost-create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $category = new Category();
        $category->name = $request ? $request->name : "";
        $category->save();
        return response()->json([
            'success' => 'Category created successfully',
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $category = Category::find($id);
        if (!empty($category)) {
            return response()->json($category, 200);
        } else {
            return response()->json([
                'error' => 'Category not found',
            ], 404);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $categories=Category::find($id);
        
        return response()->json($categories,200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $category = Category::find($id);
        if (!empty($category)) {
            $category->name = is_null($request->name) ? $category->name : $request->name;
            $category->save();
            return response()->json([
                'success' => 'Category updated successfully',
            ], 200);
        } else {
            return response()->json([
                'error' => 'Category not found',
            ], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $category = Category::find($id);
        if (!empty($category)) {
            $category->delete();
            return response()->json([
                'success' => 'Category deleted successfully',
            ], 200);
        } else {
            return response()->json([
                'error' => 'Category not found',
            ], 404);
        }
    }
}
