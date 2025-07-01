import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { X } from 'lucide-react';
import { blogPosts } from '../data';

interface BlogPostModalProps {
  isOpen: boolean;
  onClose: () => void;
  post: {
    title: string;
    excerpt: string;
    target: string;
    // Add more fields if needed
  } | null;
}


const BlogsModal: React.FC<BlogPostModalProps> = ({ isOpen, onClose, post }) => {
  if (!post) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-brand-dark-text mb-4">
            {post.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <p className="text-sm text-slate-600 leading-relaxed">
            {post.excerpt}
          </p>
          <p className="text-xs text-orange-600 font-medium">
            Target: {post.target}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};


export default BlogsModal;
