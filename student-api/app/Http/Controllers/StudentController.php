<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;
use Illuminate\Support\Facades\Redis;

class StudentController extends Controller
{
    public function index(){
        $students = Student::all();

        $data = [
            'message'=>'Get all students data',
            'data'=>$students
        ];

        return response()->json($data, 200);

    }

    public function store(Request $request){

        $input = [
            'nama'=>$request->nama,
            'nim'=>$request->nim,
            'email'=>$request->email,
            'jurusan'=>$request->jurusan
        ];

        $student = Student::create($input);

        $data = [
            'message'=>'Student data is create successfully',
            'data'=>$student,
        ];

        return response()->json($data, 201);

    }

    public function update(Request $request, $id) {
        $student = Student::find($id);
        
        if (!$student) {
            return response()->json(['message' => 'Student not found'], 404);
        }

        $validated = $request->validate([
            'nama' => 'sometimes|required|string|max:255',
            'nim' => 'sometimes|required|string|max:20|unique:students,nim,' . $id,
            'email' => 'sometimes|required|email|unique:students,email,' . $id,
            'jurusan' => 'sometimes|required|string|max:100',
        ]);

        $student->update($validated);

        return response()->json([
            'message' => 'Student data updated successfully',
            'data' => $student
        ], 200);
    }

    public function destroy($id) {
        $student = Student::find($id);
    
        if (!$student) {
            return response()->json(['message' => 'Student not found'], 404);
        }

        $studentData = [
            'id' => $student->id,
            'nama' => $student->nama,
            'nim' => $student->nim,
        ];

        $student->destroy($id);

        return response()->json([
            'message' => 'Student data deleted successfully',
            'data' => $studentData
        ], 200);


    }

}
