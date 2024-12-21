<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $books = Book::latest()->get();

        return response()->json([
            "message" => "Success get all book",
            "data" => $books,
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "title" => "required|string|max:255",
            "author" => "required|string|max:255",
            "year" => "required|digits:4|integer|min:1900",
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $book = new Book();
        $book->title = $request->title;
        $book->author = $request->author;
        $book->year = $request->year;
        $book->save();

        return response()->json([
            "message" => "Success create book",
            "data" => $book,
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Book $book)
    {
        return response()->json([
            "message" => "Success get detail book",
            "data" => $book,
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Book $book)
    {
        $validator = Validator::make($request->all(), [
            "title" => "required|string|max:255",
            "author" => "required|string|max:255",
            "year" => "required|digits:4|integer|min:1900",
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $book->title = $request->title;
        $book->author = $request->author;
        $book->year = $request->year;
        $book->save();

        return response()->json([
            "message" => "Success update book",
            "data" => $book,
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Book $book)
    {
        $book->delete();

        return response()->json([
            "message" => "Success delete book",
        ], 200);
    }
}
