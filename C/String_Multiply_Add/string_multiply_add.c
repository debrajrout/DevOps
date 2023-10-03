/*
	Can Multiply And Add two positive large integer (accepts input as a string) numbers 
    Contributed by Rupam Modak (Mapur2)
*/

#include<stdio.h>
#include<stdlib.h>
#include<string.h>
void multiply(char a[],char b[]);
void add(char e[],char acc[],int f);
void multiply(char a[],char b[])
{
	int la,lb,l,i,j,k,c=0,s=0,ln,t=0;
	lb=strlen(b);
	l=lb+strlen(a);
	l=l+1;
	//printf("l=%d\n",l);
	char acc[l],e[l];
	for(i=0;i<l-1;i++)
	{
		e[i]='0';
	}
	e[l-1]='\0';
	lb--;
	while(lb!=-1)
	{
		//printf("c= %c ",b[lb]);
		for(i=0;i<l;i++)
			acc[i]='0';
		ln=0;
		c=0;
		la=strlen(a)-1;
		j=b[lb]-48;
		while(la!=-1)
		{
			if(a[la]>='0'&& a[la]<='9'  && b[lb]>='0'&& b[lb]<='9')
			{
			i=a[la]-48;			
			s=i*j;
			s+=c;
			//printf("%d \n",s);
			acc[ln]=(s%10)+48;
			//printf("%c\n",acc[ln]);
			c=s/10;
			//printf("c=%d \n",c);
			}
			la--;
			ln++;
		}
		lb--;
		//printf("c=%d \n",c);
		if(c!=0)
		{
			acc[ln]=c+48;
			ln++;
		}
		acc[ln]='\0';
		strrev(acc);
		//printf("%s\n",acc);
		for(i=0;i<t;i++)
		{
			acc[ln++]=48;
		}	
		acc[ln]='\0';
		//printf("%s\n",acc);
		t++;
		add(e,acc,5);
	}
	printf("\nmultiply =%s\n",e);
}
void main()
{
	char a[10],b[10],d[10];
	printf("enter the integer 1: ");
	gets(a);fflush(stdin);
	printf("enter the integer 2: ");
	gets(b);fflush(stdin);
	strcpy(d,a);
	multiply(d,b);
	add(a,b,1);
}
void add(char e[],char acc[],int f)
{
		int l1=strlen(e),l2=strlen(acc),l3,l4,i=0,j=0,c=0,s=0;
		l3=(l1>l2)?l1:l2;
		l3=l3+1;
		l4=l3;
		char a[10];
		a[l3]='\0';
		l3--;
		l1--;l2--;
		while(l1!=-1 && l2!=-1)
		{
			s=(e[l1]-48)+(acc[l2]-48)+c;
			//printf("%d",s);
			if(s>9)
			{
				c=1;
				s=s-10;
			}
			else
			c=0;		
			a[l3]=s+48;
			//printf("%c",a[l3]);
			l3--;
			l1--;
			l2--;
		}
		while(l1!=-1)
		{
			s=(e[l1]-48)+c;
			if(s>9)
			{
				c=1;
				s=s-10;
			}
			else
			c=0;
			a[l3]=s+48;
			//	printf("%c\n",a[l3]);
			l3--;
			l1--;
		}
		while(l2!=-1)
		{
			s=(acc[l2]-48)+c;
			if(s>9)
			{
				s=s-10;
				c=1;
			}
			else
			{
				c=0;
			}
			a[l3]=s+48;
			//printf("%c\n",a[l3]);
			l3--;
			l2--;			
		}
		if(c!=0)
		{
			a[l3]=c+48;
			i=0;
		}
		else
		a[0]=' ';
		if(f==1)
			printf("add= %s\n ",a);
		strcpy(e,a);
		//printf("%s\n ",e);
}
