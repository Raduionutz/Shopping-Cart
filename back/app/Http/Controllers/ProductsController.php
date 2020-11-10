<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Product;

class ProductsController extends Controller {
    public function show() {

        // $product = new Product();
        // $product->name = 'Ceas Audemars Piguet';
        // $product->category = 'ceas';
        // $product->price = 4;        
        // $product->save();

        // $product = new Product();
        // $product->name = 'Ceas Vacheron Constantin';
        // $product->category = 'ceas';
        // $product->price = 7;        
        // $product->save();

        // $product = new Product();
        // $product->name = 'Ceas Patek Philippe';
        // $product->category = 'trei';
        // $product->price = 13;        
        // $product->save();

        $products=Product::all();
        return response(compact('products'), 200);
    }
}
