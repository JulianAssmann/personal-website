import { Component, ReactNode } from "react";
import Link from 'next/link';

class Copyright extends Component {
    render(): ReactNode {
        return <div>
            <div>
                <Link href="/impressum">Impresssum</Link>
            </div>
            <div>
                Copyright © Julian Aßmann {new Date().getFullYear()}
            </div>
        </div>;
    }
}

export default Copyright;