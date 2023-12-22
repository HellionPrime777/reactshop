<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $table = 'products';

    protected $fillable = [
        'name',
        'price',
        'discounted_price',
        'image',
    ];

    protected $casts = [
        'price' => 'decimal:2', // Якщо це поле є числовим із двома десятковими знаками
        'discounted_price' => 'decimal:2',
    ];
}

