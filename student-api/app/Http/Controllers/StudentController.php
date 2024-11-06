<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;
use Illuminate\Support\Facades\Redis;
use Illuminate\Support\Facades\Validator;

class StudentController extends Controller
{
    public function index(){
        $students = Student::all();

        if ($students) {
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
        // Using Validate (Otomatis)
        // $validateData = $request->validate(
        //     'nama' => 'required',
        //     'nim' => 'numeric|required',
        //     'email' => 'email|required',
        //     'jurusan' => 'required'
        // )

        // Using Class Validate (Manual)

        $validator = Validator::make($request->all(),[
            'nama' => 'required',
            'nim' => 'numeric|required',
            'email' => 'email|required',
            'jurusan' => 'required'
        ]);

        if($validator->fails()){
            return response()->json([
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }

        $student = Student::create($request->all());
        $data = [
            'message'=>'Student data created',
            'data'=>$student
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
