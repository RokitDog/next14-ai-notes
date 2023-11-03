import { Loader2 } from "lucide-react";
import { Button, ButtonProps } from "./button";

type Props = {
    loading: boolean;

} & ButtonProps

export default function LoadingButton({loading, children, ...props}: Props) {
    return (
        <Button {...props} disabled={props.disabled || loading}>
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin"/>}
            {children}
        </Button>
    )
}