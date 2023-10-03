/*
Contributed by: Jan-FCloud
@ https://github.com/Jan-Fcloud

Date: 03.10.2023

Name: Search And Hash
Description:
    - A program with which you can scan through directories, find files and hast them into SHA256
*/

using System;
using System.Threading.Tasks;
using System.IO;
using System.Security.Cryptography;

namespace dirSearchfor
{
    internal class Program
    {
        private static bool writeTo = false;
        private static bool hashFiles = false;
        private static string filter;
        private static string outputTxt = "";

        static void Main(string[] args)
        {
            string rootDir;
            string Answera, Answerb;

            Console.Write("Input directory link for search: ");
            rootDir = Console.ReadLine();
            Console.Write("Input search filter (file name or extension): ");
            filter = Console.ReadLine();
            Console.Write("Write results to file? Y or N: ");
            Answera = Console.ReadLine();
            Console.Write("Note down file hashes? Y or N: ");
            Answerb = Console.ReadLine();
            Console.Clear();

            if (Answera[0] == 'Y' || Answera[0] == 'y')
            {
                writeTo = true;
            }
            if (Answerb[0] == 'Y' || Answerb[0] == 'y')
            {
                hashFiles = true;
            }

            LoadSubDirs(rootDir);

            if (writeTo)
            {
                _ = writeToFile();
            }

            Console.WriteLine("\nFinished search!");
            Console.ReadLine();
        }

        static void LoadSubDirs(string dir)

        {

            string[] subdirectoryEntries = Directory.GetDirectories(dir);

            foreach (string subdirectory in subdirectoryEntries)

            {

                foreach (string f in Directory.GetFiles(subdirectory))
                {
                    if (f.Contains(filter))
                    {
                        string temp = f;
                        int startIndex = subdirectory.Length + 1;
                        string fileName = temp.Substring(startIndex);

                        string fileHash = "";

                        if (hashFiles)
                        {
                            fileHash = GetMD5Checksum(f);
                            Console.WriteLine(f + "\n" + fileName + " -> " + fileHash);
                        }
                        else
                        {
                            Console.WriteLine(f);
                        }

                            if (writeTo && hashFiles)
                            {
                                outputTxt += f + " -> " + fileHash + "\n";
                            }
                            else if (writeTo)
                            {
                                outputTxt += f + "\n";
                            }

                        Console.WriteLine("\n");
                    }

                }

                LoadSubDirs(subdirectory);

            }

        }

        public static async Task writeToFile()
        {
            File.WriteAllText("foundFiles.txt", outputTxt);
        }

        public static string GetMD5Checksum(string filename)
        {
            using (var md5 = MD5.Create())
            {
                using (var stream = File.OpenRead(filename))
                {
                    var hash = md5.ComputeHash(stream);
                    return BitConverter.ToString(hash).Replace("-", "");
                }
            }
        }

    }
}