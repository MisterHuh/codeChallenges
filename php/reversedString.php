<?php
function solution($str) {
  $test = "";
  $index = strlen($str) - 1;
  $barren = "";

  for ($index; $index >= 0; $index-- ) {
    $barren .= $str[$index];
  };
  return $barren;
}

  class ReversedStringsTest extends TestCase
  {
    public function testExamples()
    {
      $this->assertEquals("dlrow", solution("world"));
      $this->assertEquals("olleh", solution("hello"));
      $this->assertEquals("", solution(""));
      $this->assertEquals('h', solution("h"));
    }
  }
