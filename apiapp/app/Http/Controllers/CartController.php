<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cart;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // dd(666);
        
        $carts=Cart::all();
        return response()->json($carts,200);
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
        $cart = new Cart();
        $cart->name = $request ? $request->name : "";
        $cart->save();
        return response()->json([
            'success' => 'Cart created successfully',
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $cart = Cart::find($id);
        if (!empty($cart)) {
            return response()->json($cart, 200);
        } else {
            return response()->json([
                'error' => 'Cart not found',
            ], 404);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $carts=Cart::find($id);
        
        return response()->json($carts,200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $cart = Cart::find($id);
        if (!empty($cart)) {
            $cart->name = is_null($request->name) ? $cart->name : $request->name;
            $cart->save();
            return response()->json([
                'success' => 'Cart updated successfully',
            ], 200);
        } else {
            return response()->json([
                'error' => 'Cart not found',
            ], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $cart = Cart::find($id);
        if (!empty($cart)) {
            $cart->delete();
            return response()->json([
                'success' => 'Cart deleted successfully',
            ], 200);
        } else {
            return response()->json([
                'error' => 'Cart not found',
            ], 404);
        }
    }
}
