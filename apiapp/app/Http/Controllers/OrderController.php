<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $orders = Order::all();
        return response()->json($orders, 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $order = new Order();
        $order->name = $request->name ?? '';
        $order->price = $request->price ?? 0;
        $order->save();

        $orders = Order::all();
        return response()->json($orders, 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $order = Order::find($id);

        if ($order) {
            return response()->json($order, 200);
        } else {
            return response()->json(['error' => 'Order not found'], 404);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $order = Order::find($id);

        if ($order) {
            $order->name = $request->name ?? $order->name;
            $order->price = $request->price ?? $order->price;
            $order->save();

            $orders = Order::all();
            return response()->json($orders, 200);
        } else {
            return response()->json(['error' => 'Order not found'], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $order = Order::find($id);

        if ($order) {
            $order->delete();
            $orders = Order::all();
            return response()->json($orders, 200);
        } else {
            return response()->json(['error' => 'Order not found'], 404);
        }
    }
}
