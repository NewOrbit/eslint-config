// Covers: functional components, typed props, jsx-key on lists,
//         jsx-no-bind (ignoreDOMComponents allows inline handlers on DOM elements),
//         no style prop (forbid-dom-props), react-in-jsx-scope off

interface ButtonProps {
    disabled?: boolean;
    label: string;
    onClick: () => void;
}

const Button = ({ disabled = false, label, onClick }: ButtonProps) => (
    <button
        disabled={disabled}
        onClick={onClick}
        type="button"
    >
        {label}
    </button>
);

interface ListItem {
    id: string;
    name: string;
}

interface ItemListProps {
    items: ListItem[];
    onSelect: (id: string) => void;
}

const ItemList = ({ items, onSelect }: ItemListProps) => (
    <ul>
        {items.map((item) => (
            <li key={item.id}>
                <button
                    onClick={() => onSelect(item.id)}
                    type="button"
                >
                    {item.name}
                </button>
            </li>
        ))}
    </ul>
);

export { Button, ItemList };
