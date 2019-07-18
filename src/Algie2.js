function chkLine(a,b,c,d) {
    // Check first cell non-zero and all cells match
    return ((a != 0) && (a == b) && (a == c) && (a == d));
}

function chkWinner(bd) {
    // Check down
    for (r = 0; r < _.floor(_.divide(_.size(grid), 2)); r++)
        for (c = 0; c <= _.size(grid); c++)
            if (chkLine(bd[r][c], bd[r+1][c], bd[r+2][c], bd[r+3][c]))
                return bd[r][c];

    // Check right
    for (r = 0; r < _.size(grid); r++)
        for (c = 0; c < _.floor(_.divide(_.size(grid), 2)); c++)
            if (chkLine(bd[r][c], bd[r][c+1], bd[r][c+2], bd[r][c+3]))
                return bd[r][c];

    // Check down-right
    for (r = 0; r < _.floor(_.divide(_.size(grid), 2)); r++)
        for (c = 0; c < _.floor(_.divide(_.size(grid), 2)); c++)
            if (chkLine(bd[r][c], bd[r+1][c+1], bd[r+2][c+2], bd[r+3][c+3]))
                return bd[r][c];

    // Check down-left
    for (r = 3; r < _.floor(_.divide(_.size(grid), 2)); r++)
        for (c = 0; c < _.floor(_.divide(_.size(grid), 2)); c++)
            if (chkLine(bd[r][c], bd[r-1][c+1], bd[r-2][c+2], bd[r-3][c+3]))
                return bd[r][c];

    return 0;
}
