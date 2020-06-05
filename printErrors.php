<?php

function printerError($s)
{
  $asciiA = ord("a");
  $asciiM = ord("m");
  $counter = 0;
  $tester = 0;

  for ($index = 0; $index < strlen($s); $index++) {
    if (ord($s[$index]) < $asciiA || ord($s[$index]) > $asciiM) {
      $counter++;
    };
  };

  return $result = $counter . "/" . strlen($s);

  // loop through $s and if the character matches outside of a~m index, add counter
}

?>
