<?php

/*

There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

*/

function find_uniq($a)
{
  // Do Magic :)

  //   var_dump($a);
  $test = "";
  for ($index = 0; $index < count($a); $index++) {

    if (is_numeric($a[$index + 1]) && is_numeric($a[$index + 2])) {

      if (($a[$index] != $a[$index + 1]) && ($a[$indec] = $a[$index + 2])) {

        echo $a[$index];
        echo "<br>---<br>";
        echo $a[$index + 1];
        echo "<br>---<br>";
        echo $a[$index + 2];
        echo "<br>------<br>";
        echo $a[$index + 1];
        $index = 1000;
      }
    }
  }
}

class FindUniqTest extends TestCase
{
  public function testExamples()
  {
    $this->assertEquals(2, find_uniq([1, 1, 1, 2, 1, 1]));
    $this->assertEquals(0.55, find_uniq([0, 0, 0.55, 0, 0]));
    $this->assertEquals(1, find_uniq([0, 1, 0]));
  }
}
