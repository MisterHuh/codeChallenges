<?php

function arrayDiff($a, $b)
{

  for ($index = 0; $index < count($b); $index++) {

    $key = array_search($b[$index], $a);

    if ($key >= 0) {
      array_splice($a, $key, 1);
      $index--;
    }
  }

  return $a;
};


// top solution //
function arrayDiff($a, $b) {
  return array_values(array_diff($a, $b));
};

<?php use PHPUnit\Framework\TestCase;
class MyTestCasesTest extends TestCase
{
    public function testSampleTests() {
      $this->assertEquals([2], arrayDiff([1,2], [1]), "a was [1,2], b was [1], expected [2]");
      $this->assertEquals([2,2], arrayDiff([1,2,2], [1]), "a was [1,2,2], b was [1], expected [2,2]");
      $this->assertEquals([1], arrayDiff([1,2,2], [2]), "a was [1,2,2], b was [2], expected [1]");
      $this->assertEquals([1,2,2], arrayDiff([1,2,2], []), "a was [1,2,2], b was [], expected [1,2,2]");
      $this->assertEquals([], arrayDiff([], [1,2]), "a was [], b was [1,2], expected []");
    }
}
