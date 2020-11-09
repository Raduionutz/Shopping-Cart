<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Product;

class ProductsController extends Controller {
    public function show() {

        // $car = new Product();
        // $car->name = 'nume';
        // $car->category = 'da';
        // $car->price = 1;        
        // $car->save();


        // $car = new Product();
        // $car->name = 'nume2';
        // $car->category = 'da22';
        // $car->price = 10;        
        // $car->save();


        // $products=Product::all();

        // foreach ($products as &$p) {
        //     $p->delete();
        // }




        // $car = new Product();
        // $car->name = 'Ceas Audemars Piguet';
        // $car->category = 'ceas';
        // $car->price = 4;        
        // $car->save();



        // $car = new Product();
        // $car->name = 'Ceas Vacheron Constantin';
        // $car->category = 'ceas';
        // $car->price = 7;        
        // $car->save();


        // $car = new Product();
        // $car->name = 'Ceas Patek Philippe';
        // $car->category = 'trei';
        // $car->price = 13;        
        // $car->save();

        $products=Product::all();
        return response(compact('products'), 200);
    }
}
