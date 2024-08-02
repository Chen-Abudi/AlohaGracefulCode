import { problems } from "@/mockProblems/problems";
import Link from "next/link";
import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";

type ProblemsTableProps = {};

const ProblemsTable: React.FC<ProblemsTableProps> = () => {
  return (
    <tbody className="text-white">
      {problems.map((problem, index) => {
        const difficultyColor =
          problem.difficulty === "Easy"
            ? "text-dark-green-s"
            : problem.difficulty === "Medium"
            ? "text-dark-yellow"
            : "text-dark-pink";

        return (
          <tr
            className={`${index % 2 == 1 ? "bg-dark-layer-1" : ""}`}
            key={problem.id}
          >
            <th className="px-2 py-4 font-medium whitespace-nowrap text-dark-green-s">
              <BsCheckCircle width={"18"} fontSize={"18"} />
            </th>
            <td className="px-6 py-4">
              <Link
                href={`/problems/${problem.id}`}
                className="hover:text-blue-500 cursor-pointer"
              >
                {problem.title}
              </Link>
            </td>
            <td className={`px-6 py-4 ${difficultyColor}`}>
              {problem.difficulty}
            </td>
            <td className={"px-6 py-4"}>{problem.category}</td>
            <td className={"px-6 py-4"}>
              {problem.videoId ? (
                <AiFillYoutube
                  className="cursor-pointer hover:text-dark-pink"
                  fontSize={"35"}
                />
              ) : (
                <p className="text-gray-300">Coming soon</p>
              )}
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default ProblemsTable;
