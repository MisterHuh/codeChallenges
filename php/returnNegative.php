<?php

class MakeNegativeTestCases extends TestCase
{
  // test makeNegative()
  public function testMakeNegative()
  {
    $this->assertEquals(makeNegative(7), -7);
    $this->assertEquals(makeNegative(-20), -20);
    $this->assertEquals(makeNegative(0), 0);
    $this->assertEquals(makeNegative(0.12), -0.12);
  }
}

function makeNegative($num)
{
  if ($num > 0) {
    return $num * (-1);
  } else {
    return $num;
  };
};

?>
