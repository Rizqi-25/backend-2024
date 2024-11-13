<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Employee;
use Illuminate\Support\Facades\Redis;
use Illuminate\Support\Facades\Validator;

class EmployeeController extends Controller
{
    public function index(){
        $employees = Employee::all();

        if ($employees){
            $data = [
                'message'=>'Get All Resource',
                'data'=>$employees
            ];
            return response()->json($data, 200);
        }
        else {
            $data = [
                'message' => 'Data is empty'
            ];

            return  response()->json($data, 200);
        }
    }

    // Menambahkan karyawan
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'name' => 'required|string',
            'gender' => 'required|in:M,F',
            'phone' => 'required|string',
            'address' => 'required|string',
            'email' => 'required|email|unique:employees',
            'status' => 'required|string',
            'hired_on' => 'required|date',
        ]);

        if($validator->fails()){
            return response()->json([
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }

        $employee = Employee::create($request->all());
        $data = [
            'message'=>'Resource is added successfully',
            'data'=>$employee
        ];
        return response()->json($data, 201);
    }

    // Menampilkan data karyawan by id
    public function show($id)
    {
        $employee = Employee::find($id);
        if($employee){
            $data = [
                'message' => 'Get Detail Resource',
                'data'  => $employee
            ];

            return response()->json($data, 200);
        }
        else {
            $data = [
                'message' => 'Resource not found'
            ];
            return response()->json($data, 404);
        }
    }

    // Mengupdate data karyawan

    public function update(Request $request, $id)
    {
        $employee = Employee::find($id);
        if (!$employee) {
            return response()->json(['message' => 'Resource not found'], 404);
        }

        $validated = $request->validate([
            'name' => 'string',
            'gender' => 'in:M,F',
            'phone' => 'string',
            'address' => 'string',
            'email' => 'email|unique:employees,email,' . $id,
            'status' => 'string',
            'hired_on' => 'date',
        ]);

        $employee->update($validated);
        $data = [
            'message' => 'Resource is updated successfully',
            'data' => $employee
        ];
        return response()->json($employee, 200);
    }

    // Menghapus Data Karyawan
    public function destroy($id)
    {
        $employee = Employee::find($id);
        if (!$employee) {
            return response()->json(['message' => 'Resource not found'], 404);
        }

        $employee->delete();
        $data = [
            'message' => 'Resource is deleted successfully',
            'data' => $employee
        ];
        return response()->json($data, 200); 
    }

    // Mencari data karyawan berdasarkan nama
    public function search($name)
    {
        $employees = Employee::where('name', 'like', '%' . $name . '%')->get();
        // mengecek jika dara employee ada di database
        if (!$employees) {
            return response()->json([
                'message' => 'Resource not found.'
            ], 404);
        }
        $data = [
            'message' => 'Get searched resource',
            'data' => $employees
        ];
        return response()->json($data, 200);
    }

    // Menampilkan status karyawan aktif
    public function active()
    {
        $employees = Employee::where('status', 'active')->get();
        $total = $employees->count();
        if (!$employees) {
            return response()->json([
                'message' => 'Resource not found.'
            ], 404);
        }
        $data = [
            'message' => 'Get Active Resource',
            'total' => $total,
            'data' => $employees
        ];
        return response()->json($data, 200);
    }

    // Menampilkan status karyawan inactive
    public function inactive(){
        $employees = Employee::where('status', 'inactive')->get();
        $total = $employees->count();
        if (!$employees) {
            return response()->json([
                'message' => 'Resource not found.'
            ], 404);
        }
        $data = [
            'message' => 'Get Inactive Resource',
            'total' => $total,
            'data' => $employees
        ];
        return response()->json($data, 200);
    }

    // Menampilkan karyawan yang diberhentikan / terminated

    public function terminated(){
        $employees = Employee::where('status', 'terminated')->get();
        $total = $employees->count();
        if (!$employees) {
            return response()->json([
                'message' => 'Resource not found.'
            ], 404);
        }
        $data = [
            'message' => 'Get Terminated Resource',
            'total' => $total,
            'data' => $employees
        ];
        return response()->json($data, 200);
    }

}
