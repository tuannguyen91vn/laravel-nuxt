<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NuxtPageController
{
  public function index() {
    $content = file_get_contents(public_path('/nuxt-app/index.html'), true);

    return $content;
  }
}
