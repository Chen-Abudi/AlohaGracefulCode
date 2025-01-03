import React from "react";

import Topbar from "@/components/Topbar/Topbar";
import Workspace from "@/components/Workspace/Workspace";
import { problems } from "@/utils/problems";
import { Problem } from "@/utils/types/problem";
import useHasMounted from "@/hooks/useHasMounted";

type ProblemPageProps = {
  problem: Problem;
};

const ProblemPage: React.FC<ProblemPageProps> = ({ problem }) => {
  const hasMounted = useHasMounted();

  if (!hasMounted) return null;
  return (
    <div>
      <Topbar problemPage />
      <Workspace problem={problem} />
    </div>
  );
};

export default ProblemPage;

// Fetches problem data locally
// SSG - Static Site Generation
// getStaticPaths() => It creates dynamic routes
export async function getStaticPaths() {
  const paths = Object.keys(problems).map((key) => ({
    params: { pid: key },
  }));

  return {
    paths,
    fallback: false,
  };
}

// getStaticProps() => It fetched data for dynamic routes
export async function getStaticProps({ params }: { params: { pid: string } }) {
  const { pid } = params;
  const problem = problems[pid];

  if (!problem) {
    return {
      notFound: true,
    };
  }

  problem.handlerFunction = problem.handlerFunction.toString();

  return {
    props: {
      problem,
    },
  };
}
