<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;
use Illuminate\Support\Facades\Redis;

class StudentController extends Controller
{
    public function index(){
        $students = Student::all();

        if ($student) {
            $data = [
                'message'=>'Get all students data',
                'data'=>$students
            ];
            return response()->json($data, 200);
        }
        else {
            $data = [
                'message' => 'The student data is empty. Add the student first or check the databases.'
            ];

            return  response()->json($data, 404);
        }
        

    }

    public function store(Request $request){

        $expectedFields = ['nama', 'nim', 'email', 'jurusan'];

        // mengecek apakah variable request sudah sesuai
        $inputKeys = array_keys($request->all());
        $unexpectedKeys = array_diff($inputKeys, $expectedFields);
    
        if (!empty($unexpectedKeys)) {
            return response()->json([
                'message' => 'Unexpected fields: ' . implode(', ', $unexpectedKeys),
            ], 400);
        }
    
        // mengecek apabila ada field yang belum diisi
        foreach ($expectedFields as $field) {
            if (!$request->has($field)) {
                return response()->json([
                    'message' => "The field '$field' is required and must be spelled correctly.",
                ], 400);
            }
        }

        $input = [
            'nama'=>$request->nama,
            'nim'=>$request->nim,
            'email'=>$request->email,
            'jurusan'=>$request->jurusan
        ];

        $student = Student::create($input);

        if ($student) {
            return response()->json([
                'message' => 'Student data created successfully',
                'data' => $student,
            ], 201);
        } else {
            
            return response()->json([
                'message' => 'Failed to create student data',
            ], 500);
        }
    }

    public function update(Request $request, $id)
    {
        // Mengambil data student terlebih dahulu
        $student = Student::find($id);

        // Mengecek apabila data tidak ada akan mengirimkan respons not found

        if ($student) {

            $input = [
                'nama'  => $request->nama ??  $student->nama,
                'nim'   => $request->nim ??  $student->nim,
                'email' => $request->email ??  $student->email,
                'jurusan' => $request->jurusan ??  $student->jurusan
            ];
            
            // Mengupdate data student
            $student->update($input);

            $data = [
                'message'=>'Student data is update successfully',
                'data'=>$student,
            ];

            return response()->json($data, 200);
            
        }
        else {
            $data = [
                'message' => 'Student not found'
            ];

            return  response()->json($data, 404);
        }
    }


    public function destroy($id) {
        $student = Student::find($id);
    
        if ($student) {
            # Menghapus student jika data tersebut ada
            $student->delete();

            $data = [
                'message' => 'Student deleted successfully',
                'data' => $student
            ];

            # Mengembalikan data student yang dihapus
            return response()->json($data, 200);
        }
        else {
            # Data student tidak ditemukan
            $data = [
                'message' => 'Student not found'
            ];
            return response()->json($data, 404);
        }
    }

    # Membuat fungsi show untuk menampilkan detail dari data student berdasarkan id-nya
    public function show($id) {
        $student = Student::find($id);

        if($student){
            $data = [
                'message' => 'Detail of Student data',
                'data'  => $student
            ];

            return response()->json($data, 200);
        }
        else {
            $data = [
                'message' => 'Student not found'
            ];
            return response()->json($data, 404);
        }
    }

}
