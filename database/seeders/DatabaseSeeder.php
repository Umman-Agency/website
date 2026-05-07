<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        if(!env('ADMIN_EMAIL')){
          // Not seeding
          return;
        }

        try {
            User::factory(10)->create();

            User::factory()->create([
              'name' => env('ADMIN_NAME'),
              'email' => env('ADMIN_EMAIL'),
              'password' => Hash::make(env('ADMIN_PASSWORD')),
             ]);
        }
        catch (exception){
            echo "Problems seeding with this username";
            echo "${env('ADMIN_NAME')}";
        }
    }
}
