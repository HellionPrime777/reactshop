<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;

class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // dd(666);
        
        $items=Item::all();
        return response()->json($items,200);
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
        $item = new Item();
        $item->name = $request ? $request->name : "";
        $item->save();
        return response()->json([
            'success' => 'Item created successfully',
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $item = Item::find($id);
        if (!empty($item)) {
            return response()->json($item, 200);
        } else {
            return response()->json([
                'error' => 'Item not found',
            ], 404);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $items=Item::find($id);
        
        return response()->json($items,200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $item = Item::find($id);
        if (!empty($item)) {
            $item->name = is_null($request->name) ? $item->name : $request->name;
            $item->save();
            return response()->json([
                'success' => 'Item updated successfully',
            ], 200);
        } else {
            return response()->json([
                'error' => 'Item not found',
            ], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $item = Item::find($id);
        if (!empty($item)) {
            $item->delete();
            return response()->json([
                'success' => 'Item deleted successfully',
            ], 200);
        } else {
            return response()->json([
                'error' => 'Item not found',
            ], 404);
        }
    }
}
