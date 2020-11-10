<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Order extends Eloquent
{

    protected $connection = 'mongodb';
    protected $collection = 'orders';
    
    protected $fillable = [
        'date',
        'status',
        'deliveryDate',
        'products',
        'price',
    ];
}
