"use client"

import { FooterLink } from "../ui/footer/FooterLink";
import { ArrayListMenuFooter } from "../array/ArrayListMenuFooter";

export const listLinkFooterMenu = ArrayListMenuFooter.map(listLink =>
    <FooterLink href={listLink.href} key={listLink.id} title={listLink.title} />
  );
