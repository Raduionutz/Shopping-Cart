<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Order;

class OrdersController extends Controller
{
    public function show() {
        $orders=Order::all();
        return response(compact('orders'), 200);
    }


    public function store(Request $request)
    {
        $order = new Order();
        
        $order->products = $request->input('products');
        $order->price = $request->input('total');
        $order->date = date("Y-m-d H:i:s");;
        $order->deliveryDate = date("Y-m-d", strtotime("+1 week"));;
        $order->status = 'Payment pending.';

        $order->save();

        error_log('Saved new order.');
        
        $response = (object) ['orderId' => $order->_id];

        return response(json_encode($response), 200);
    }


    public function update(Request $request)
    {
        $order = Order::find($request->route('id'));
        
        $order->status = $request->input('status');

        $order->save();

        return response(json_encode('Succes!'), 200);
    }
}
