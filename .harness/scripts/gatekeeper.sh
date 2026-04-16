#!/bin/bash

# Simple Gatekeeper script for portfolio
# This script is a placeholder for actual validation logic (lint, test, etc.)

echo "🔍 Running Portfolio Gatekeeper..."

# Simulate check (e.g., checking if build passes or files exist)
if [ -d "src" ]; then
  echo "✅ Source directory exists."
else
  echo "❌ Source directory not found!"
  exit 1
fi

echo "🚀 GATE_PASSED"
exit 0
