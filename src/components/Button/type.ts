export const styleClasses = {
    icon: 'button--icon',
} as const;
  
export type ButtonStyle = keyof typeof styleClasses;

export type buttontype = {
    buttonText?: string;
    isActive?: boolean;
    onClickEvent?: () => void;
    onMouseDown?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    style?: ButtonStyle | [ButtonStyle, ...ButtonStyle[]];
};