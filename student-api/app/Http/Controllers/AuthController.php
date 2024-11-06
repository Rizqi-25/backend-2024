<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(Request $request){
        // Mengambil data register
        $input = [
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ];

        // Menginsert data hasil register ke table user
        $user = User::create($input);

        $data = [
            'message' => 'Register is complete, user is created'
        ];

        // Mengirim response json
        return response()->json($data, 200);
    }

    public function login(Request $request){
        // Menangkap input user

        $input = [
            'email' => $request->email,
            'password' => $request->password
        ];

        // Melakukan Authentikasi
        if (Auth::attempt($input)){
            // Membuat token
            $token = Auth::user()->createToken('auth_token');

            $data = [
                'message' => 'Login Successfully',
                'token' => $token->plainTextToken
            ];

            // Mengembalikan Respon json
            return response()->json($data, 200);
        }else{
            $data = [
                'message' => "Username or password is wrong"
            ];

            return response()->json($data, 401);
        }
    }
}