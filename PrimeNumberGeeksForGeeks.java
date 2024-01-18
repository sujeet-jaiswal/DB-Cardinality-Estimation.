package com.dsa;

import java.util.Arrays;
import java.util.stream.IntStream;

public class PrimeNumberGeeksForGeeks {

	//prime number less than n
	
	public static void printPrimeNumberLessThanInput(long n)
	{
		
		for(int i=2; i<=n;i++)
		{
			int count =0;
			
			for(int j=2;j*j<=i;j++)
			{
				if(i%j==0)
				{
					count++;
				}
			}
			if(count==0)
			{
				System.out.println("the prime number "+i);
			}
		}
	}
	
	
	//optimised algorithms of the above method
	
	public static void optimisedPrimeAlgo(int n)
	{
		
	
		boolean[] isPrime = new boolean[ n+1];
		
		Arrays.fill(isPrime, true);
		
		for(int i=2;i<=7;i++)
		{
			int k=1;
			for(int j=2;k<=n;j++)
			{
				k=i*j;
				if(k<=n)
				isPrime[k]=false;
				
			}
		}
		
		IntStream.range(2,isPrime.length).filter(val->isPrime[val]).forEach(val->System.out.println(val));
		
	}

	public static void main(String[] args)
	{
              
//		printPrimeNumberLessThanInput(10);
		
		optimisedPrimeAlgo(10);
	}

}
