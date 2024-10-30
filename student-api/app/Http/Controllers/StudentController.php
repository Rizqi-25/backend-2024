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
