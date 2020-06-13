<?php

/*

You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

*/

function positive_sum($arr)
{
  // Your code here

  $answer = 0;

  for ($index = 0; $index < count($arr); $index++) {
    if ($arr[$index] > 0) {
      $answer = $answer + $arr[$index];
    };
  }

  return $answer;
}

// top solutoins

function positive_sum($a)
{
  return array_sum(array_filter($a, function ($n) {
    return $n > 0;
  }));
};



function positive_sum($arr)
{
  $sum = 0;

  foreach ($arr as $element) {
    $sum += $element > 0 ? $element : 0;
  }

  return $sum;
};


class PositiveSumTest extends TestCase
{
  public function testExamples()
  {
    $this->assertEquals(15, positive_sum([1, 2, 3, 4, 5]));
    $this->assertEquals(13, positive_sum([1, -2, 3, 4, 5]));
    $this->assertEquals(0, positive_sum([]));
    $this->assertEquals(0, positive_sum([-1, -2, -3, -4, -5]));
    $this->assertEquals(9, positive_sum([-1, 2, 3, 4, -5]));
  }
}
