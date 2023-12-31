<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Books;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $books = Books::all();
        return response()->json($books, 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $book = new Books();
        $book->name = $request ? $request->name : "";
        $book->author = $request ? $request->author : "";
        $book->publish_date = $request ? $request->publish_date : "";
        $book->save();
        return response()->json([
            'success' => 'Book created successfuly',
        ], 200);

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $book = Books::find($id);
        if (!empty($book)) {
            return response()->json($book, 200);
        } else {
            return response()->json([
                'error' => 'Book not found',
            ], 404);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $book = Books::find($id);
        if (!empty($book)) {
            $book = new Books();
            $book->name = is_null($request->name) ? $book->name : $request->name ;
            $book->author = $request->author ? $request->author : $book->author;
            $book->publish_date = $request->publish_date ? $request->publish_date : $book->publish_date;
            $book->save();
            return response()->json([
                'success' => 'Book updated successfuly',
            ], 200);
        }else{
            return response()->json([
                'error'=> 'Book not found',
            ],404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        if (Books::where('id',$id)->exists()) {
            $book=Books::find($id);
            $book->delete();
            return response()->json([
                'success'=> 'Book deleted successfuly',
            ],202);
    }else{
        return response()->json([
            'error'=> 'Book not found',
        ],404);
    }
}
}
