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

    public function update(Request $request, $id)
    {
        // Mengambil data student terlebih dahulu
        $student = Student::find($id);

        // Mengecek apabila data tidak ada akan mengirimkan respons not found
        if (!$student) {
            return response()->json(['message' => 'Student not found'], 404);
        }

        
        if ($request->has('nama')) {
            $student->nama = $request->input('nama');
        }
        if ($request->has('nim')) {
            $student->nim = $request->input('nim');
        }
        if ($request->has('email')) {
            $student->email = $request->input('email');
        }
        if ($request->has('jurusan')) {
            $student->jurusan = $request->input('jurusan');
        }

        
        $student->save();

        
        return response()->json(['message' => 'Student updated successfully', 'student' => $student], 200);
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
