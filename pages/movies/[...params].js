import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function detail({ params }) {
    const router = useRouter();
    // const [title, id] = router.query.params ?? [];
    const [title, id] = params;
    return (
        <div>
            <Seo title={title} />
            <h4>{id}</h4>
            <h4>{title}</h4>
        </div>
    );
}

export function getServerSideProps({ query: { params} }) {
    return {
        props: { params }
    }
}