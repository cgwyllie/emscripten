function asm(x, y) {
  x = +x;
  y = y | 0;
  var a = 0;
  a = cheez(y + ~~x | 0) | 0;
  fleefl(a * a | 0, a | 0);
}
function __Z11printResultPiS_j($needle, $haystack, $len) {
  $needle = $needle | 0;
  $haystack = $haystack | 0;
  $len = $len | 0;
  var $3 = 0, __stackBase__ = 0;
  __stackBase__ = STACKTOP;
  $3 = _bsearch($needle, $haystack, $len, 4, 2);
  if (($3 | 0) == 0) {
    _puts(_str | 0);
    STACKTOP = __stackBase__;
    return;
  } else {
    _printf(__str1 | 0, (tempInt = STACKTOP, STACKTOP = STACKTOP + 4 | 0, HEAP32[(tempInt & 16777215) >> 2] = HEAP32[($3 & 16777215) >> 2] | 0, tempInt));
    STACKTOP = __stackBase__;
    return;
  }
}
function _segment_holding($addr) {
  $addr = $addr | 0;
  var $sp_0 = 0, $3 = 0, $12 = 0, $_0 = 0, label = 0;
  $sp_0 = __gm_ + 444 | 0;
  while (1) {
    $3 = HEAP32[(($sp_0 | 0) & 16777215) >> 2] | 0;
    if (!($3 >>> 0 > $addr >>> 0)) {
      if (($3 + (HEAP32[(($sp_0 + 4 | 0) & 16777215) >> 2] | 0) | 0) >>> 0 > $addr >>> 0) {
        $_0 = $sp_0;
        label = 1658;
        break;
      }
    }
    $12 = HEAP32[(($sp_0 + 8 | 0) & 16777215) >> 2] | 0;
    if (($12 | 0) == 0) {
      $_0 = 0;
      label = 1659;
      break;
    } else {
      $sp_0 = $12;
    }
  }
  if (label == 1659) {
    return $_0;
  } else if (label == 1658) {
    return $_0;
  }
}

