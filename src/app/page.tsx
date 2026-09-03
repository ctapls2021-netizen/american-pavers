'use client';

import React, { useEffect, useRef } from 'react';
import { systemPaversHtml } from '@/data/systemPaversHtml';

export default function SystemPaversClonePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const root = containerRef.current;

    // 1. Navigation Submenus / Mega-Menus
    const navItems = root.querySelectorAll<HTMLElement>('[id^="top-nav-entry-"]');

    const closeAllSubmenus = () => {
      navItems.forEach((item) => {
        item.classList.remove('is-active');
        const panel = item.querySelector<HTMLElement>('.styles_imagePanel__eQk0_, .styles_panel__zG9h_');
        if (panel) {
          panel.classList.remove('styles_--open__bRN8s');
        }
      });
    };

    navItems.forEach((navItem) => {
      const panel = navItem.querySelector<HTMLElement>('.styles_imagePanel__eQk0_, .styles_panel__zG9h_');
      if (!panel) return;

      let timer: NodeJS.Timeout;

      // Mouse Enter
      navItem.addEventListener('mouseenter', () => {
        clearTimeout(timer);
        closeAllSubmenus();
        navItem.classList.add('is-active');
        panel.classList.add('styles_--open__bRN8s');
      });

      // Mouse Leave with slight delay for smooth hover
      navItem.addEventListener('mouseleave', () => {
        timer = setTimeout(() => {
          navItem.classList.remove('is-active');
          panel.classList.remove('styles_--open__bRN8s');
        }, 150);
      });

      // Click to toggle
      const trigger = navItem.querySelector('span');
      if (trigger) {
        trigger.addEventListener('click', (e) => {
          e.stopPropagation();
          const isOpen = navItem.classList.contains('is-active');
          closeAllSubmenus();
          if (!isOpen) {
            navItem.classList.add('is-active');
            panel.classList.add('styles_--open__bRN8s');
          }
        });
      }
    });

    // Close on click outside
    const handleDocumentClick = (e: MouseEvent) => {
      if (!root.querySelector('.styles_nav__QkCJl')?.contains(e.target as Node)) {
        closeAllSubmenus();
      }
    };
    document.addEventListener('click', handleDocumentClick);

    // 2. FAQ Accordion Interaction
    const faqItems = root.querySelectorAll<HTMLElement>('.styles_faqListItem__ozXz2');
    faqItems.forEach((item) => {
      const questionBtn = item.querySelector<HTMLElement>('.styles_question__W8Gme, button');
      if (questionBtn) {
        questionBtn.addEventListener('click', (e) => {
          e.preventDefault();
          const isOpen = item.classList.contains('styles_--open__brzuG');
          // Close others
          faqItems.forEach((f) => f.classList.remove('styles_--open__brzuG'));
          // Toggle current
          if (!isOpen) {
            item.classList.add('styles_--open__brzuG');
          }
        });
      }
    });

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="__next"
      className="systempavers-exact-clone"
      dangerouslySetInnerHTML={{ __html: systemPaversHtml }}
    />
  );
}
