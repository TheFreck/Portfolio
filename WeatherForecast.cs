using System;
// you can also use other imports, for example:
// using System.Collections.Generic;

// you can write to stdout for debugging purposes, e.g.
// Console.WriteLine("this is a debug message");

class Solution
{
    public int solution(int[] A)
    {
        // write your code in C# 6.0 with .NET 4.5 (Mono)
        int switches = 0;
        for (var i = 1; i <= A.Length + 1; i++)
        {
            if (A[i] == A[i - 1])
            {
                if (A[i] == 1) A[i] = 0;
                else A[i] = 1;
                switches++;
            }
        }
        Console.WriteLine("switches: " + switches);
        return switches;
    }
}
