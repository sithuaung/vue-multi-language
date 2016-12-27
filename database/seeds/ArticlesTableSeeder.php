<?php

use Illuminate\Database\Seeder;

class ArticlesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $first = [
            'en' => [
                'title' => 'First article',
                'body'  => 'First article body'
            ],
            'mm' => [
                'title' => 'ပထမစာပုဒ်',
                'body'  => 'ပထမစာပုဒ် စာသား'
            ]
        ];

        $second = [
            'en' => [
                'title' => 'Second article',
                'body'  => 'Second article body'
            ],
            'mm' => [
                'title' => 'ဒုတိယ စာပုဒ်',
                'body'  => 'ဒုတိယ စာပုဒ် စာသား'
            ]
        ];

        $third = [
            'en' => [
                'title' => 'Third article',
                'body'  => 'Third article body'
            ],
            'mm' => [
                'title' => 'တတိယ စာပုဒ်',
                'body'  => 'တတိယ စာပုဒ် စာသား'
            ]
        ];

        App\Article::create($first);
        App\Article::create($second);
        App\Article::create($third);
    }
}
