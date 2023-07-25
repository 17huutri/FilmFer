import { Icon, Collapsible, CollapsibleItem } from 'react-materialize';

export default function About() {

    return (
        <Collapsible accordion={false}>
            <CollapsibleItem
                expanded={false}
                header="THE TEAM"
                icon={<Icon>supervisor_account</Icon>}
                node="div"
            >
                Have you can see the film card, which consists of over 50 films from all over the world
            </CollapsibleItem>
            <CollapsibleItem
                expanded={false}
                header="Nation"
                icon={<Icon>place</Icon>}
                node="div"
            >
                Yeah, you do seem to have a little 'shit creek' action going.
            </CollapsibleItem>
            <CollapsibleItem
                expanded={false}
                header="Daily news"
                icon={<Icon>whatshot</Icon>}
                node="div"
            >
                You know, FYI, you can buy a paddle. Did you not plan for this contingency?
            </CollapsibleItem>
        </Collapsible>
    );
}