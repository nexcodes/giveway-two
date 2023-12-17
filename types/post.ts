export interface Post {
  author_id: string | null;
  content: string | null;
  created_at: string;
  description: string | null;
  id: string;
  image: string | null;
  published: boolean | null;
  title: string | null;
  updated_at: string | null;
}

type TextContent = {
  type: "text";
  text: string;
  styles: Record<string, any>;
};

type Paragraph = {
  id: string;
  type: "paragraph";
  props: {
    textColor: string;
    backgroundColor: string;
    textAlignment: string;
  };
  content: TextContent[];
  children: any[];
};

type Image = {
  id: string;
  type: "image";
  props: {
    backgroundColor: string;
    textAlignment: string;
    url: string;
    caption: string;
    width: number;
  };
  children: any[];
};

type Heading = {
  id: string;
  type: "heading";
  props: {
    textColor: string;
    backgroundColor: string;
    textAlignment: string;
    level: number;
  };
  content: TextContent[];
  children: any[];
};

type ListItem = {
  id: string;
  type: "bulletListItem" | "numberedListItem";
  props: {
    textColor: string;
    backgroundColor: string;
    textAlignment: string;
  };
  content: TextContent[];
  children: any[];
};

export type DataItem = Paragraph | Image | Heading | ListItem;

export type responseData = {
  trans: {
    [key: string]: string
  }[]
}