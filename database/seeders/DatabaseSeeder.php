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
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        if(!env('ADMIN_EMAIL')){
          // Not seeding
          return;
        }

        User::updateOrCreate([
          'name' => env('ADMIN_NAME'),
          'email' => env('ADMIN_EMAIL'),
          'password' => Hash::makeenv('ADMIN_PASSWORD'),
        ]);
    }
}
