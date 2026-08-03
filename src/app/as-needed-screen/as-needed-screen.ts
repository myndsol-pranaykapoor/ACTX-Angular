import { Component, Output, EventEmitter, ViewEncapsulation, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebHeaderComponent } from '../web-header/web-header.component';
import { CommandBarComponent } from '../command-bar/command-bar.component';
import { WebFooterComponent } from '../web-footer/web-footer.component';
import { SectionHeaderComponent } from '../section-header/section-header.component';
import { PopUpHeaderComponent } from '../pop-up-header/pop-up-header.component';
import { ChipTagComponent } from '../chip-tag/chip-tag.component';
import { FilterDrawerComponent, FilterDrawerSection } from '../filter-drawer/filter-drawer.component';
import { TableComponent, TableHeaderColumn, DataRowTabConfig } from '../table/table.component';
import { TabBarComponent, TabBarItem } from '../tab-bar/tab-bar.component';

@Component({
  selector: 'pds-as-needed-screen',
  standalone: true,
  imports: [CommonModule, WebHeaderComponent, CommandBarComponent, WebFooterComponent, SectionHeaderComponent, PopUpHeaderComponent, ChipTagComponent, FilterDrawerComponent, TableComponent, TabBarComponent],
  templateUrl: './as-needed-screen.html',
  styleUrl: './as-needed-screen.css',
  encapsulation: ViewEncapsulation.None,
})
export class AsNeededScreen {
  @Output() navigateToLogin = new EventEmitter<void>();
  @Output() navigateToHome = new EventEmitter<void>();

  filterDrawerOpen = signal(false);
  filterDrawerSections: FilterDrawerSection[] = [
    {
      type: 'multi-selection',
      title: 'Entity Type',
      options: [
        { label: 'Private Limited', checked: true },
        { label: 'Public Limited', checked: false },
        { label: 'LLP', checked: false },
        { label: 'Partnership', checked: false },
      ],
    },
    {
      type: 'multi-selection',
      title: 'State',
      options: [
        { label: 'Maharashtra', checked: true },
        { label: 'Tamil Nadu', checked: false },
        { label: 'Gujarat', checked: false },
        { label: 'Karnataka', checked: false },
        { label: 'Delhi', checked: false },
      ],
    },
    {
      type: 'multi-selection',
      title: 'Industry',
      options: [
        { label: 'Manufacturing', checked: false },
        { label: 'IT Services', checked: true },
        { label: 'Retail', checked: false },
        { label: 'Healthcare', checked: false },
        { label: 'Education', checked: false },
      ],
    },
  ];


  // As Needed Table Configuration
  asNeededTableColumns: TableHeaderColumn[] = [
    { type: 'text', label: 'Report Name' },
    { type: 'text', label: 'Last Generated' },
    { type: 'text', label: 'Status' },
    { type: 'text', label: 'Action' },
  ];

  asNeededTableRows: DataRowTabConfig[][] = [
    [
      { type: 'text', text: 'Monthly Compliance Report' },
      { type: 'text', text: '25 Jul 2026' },
      { type: 'text', text: 'Generated' },
      { type: 'text', text: 'Download' },
    ],
    [
      { type: 'text', text: 'Payroll Analysis' },
      { type: 'text', text: '20 Jul 2026' },
      { type: 'text', text: 'Generated' },
      { type: 'text', text: 'View' },
    ],
    [
      { type: 'text', text: 'Tax Liability Report' },
      { type: 'text', text: '15 Jul 2026' },
      { type: 'text', text: 'Ready' },
      { type: 'text', text: 'Generate' },
    ],
    [
      { type: 'text', text: 'Audit Trail Export' },
      { type: 'text', text: '10 Jul 2026' },
      { type: 'text', text: 'Generated' },
      { type: 'text', text: 'Download' },
    ],
    [
      { type: 'text', text: 'Employee Benefit Summary' },
      { type: 'text', text: '5 Jul 2026' },
      { type: 'text', text: 'Generated' },
      { type: 'text', text: 'View' },
    ],
    [
      { type: 'text', text: 'Compliance Scorecard' },
      { type: 'text', text: '1 Jul 2026' },
      { type: 'text', text: 'Ready' },
      { type: 'text', text: 'Generate' },
    ],
    [
      { type: 'text', text: 'Risk Assessment Report' },
      { type: 'text', text: '25 Jun 2026' },
      { type: 'text', text: 'Generated' },
      { type: 'text', text: 'Download' },
    ],
    [
      { type: 'text', text: 'Labor Law Update Summary' },
      { type: 'text', text: '20 Jun 2026' },
      { type: 'text', text: 'Generated' },
      { type: 'text', text: 'View' },
    ],
    [
      { type: 'text', text: 'Financial Compliance Report' },
      { type: 'text', text: '15 Jun 2026' },
      { type: 'text', text: 'Ready' },
      { type: 'text', text: 'Generate' },
    ],
    [
      { type: 'text', text: 'Entity Status Report' },
      { type: 'text', text: '10 Jun 2026' },
      { type: 'text', text: 'Generated' },
      { type: 'text', text: 'Download' },
    ],
  ];

  asNeededTableTotalItems = 10;
  asNeededTablePageSize = 10;

  // Tab Bar Configuration for As Needed Reports
  asNeededTabItems: TabBarItem[] = [
    { label: 'Registrations & Licenses' },
    { label: 'Completed Activity' },
    { label: 'All' },
  ];

  get currentMonthDateRange(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const firstDay = 1;
    const lastDay = new Date(year, month + 1, 0).getDate();
    const monthName = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(today);
    return `${firstDay} ${monthName} ${year} - ${lastDay} ${monthName} ${year}`;
  }


  onFooterAction1() {
    console.log('Footer action 1 clicked');
  }

  onFooterAction2() {
    console.log('Footer action 2 clicked');
  }

  onCommandBarSecondaryClick() {
    this.filterDrawerOpen.set(true);
  }

  onFilterDrawerClose() {
    this.filterDrawerOpen.set(false);
  }

  onFilterDrawerApply() {
    console.log('Filters applied');
    this.filterDrawerOpen.set(false);
  }

  onFilterDrawerReset() {
    console.log('Filters reset');
  }

  onAsNeededTabChange(event: any) {
    console.log('As Needed tab changed to:', event);
  }

  onCommandBarPrimaryClick() {
    this.navigateToLogin.emit();
  }
}
