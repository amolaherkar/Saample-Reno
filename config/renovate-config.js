module.exports = {
  branchPrefix: 'CVE-',
  username: 'amolaherkar',
  gitAuthor: 'Test Bot <amolaherkar@gmail.com>',
  onboarding: false,
  platform: 'github',
  includeForks: true,
  dryRun: 'full',
  repositories: [
    'amolaherkar/Saample-Reno'
  ],
  packageRules: [
    {
      description: 'lockFileMaintenance',
      matchUpdateTypes: [
        'pin',
        'digest',
        'patch',
        'minor',
        'major',
        'lockFileMaintenance',
      ],
      dependencyDashboardApproval: false,
      stabilityDays: 0,
    },
  ],
};
