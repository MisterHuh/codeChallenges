<?php

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

// top solutoin

function positive_sum($a)
{
  return array_sum(array_filter($a, function ($n) {
    return $n > 0;
  }));
}


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
